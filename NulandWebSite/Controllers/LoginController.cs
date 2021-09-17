using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using nulandWebApp.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;


namespace LoginApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly Microsoft.AspNetCore.Hosting.IWebHostEnvironment _env;
        public LoginController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }


        [HttpPost]
        public Response Post(Login login)
        {
            string query = @"
                            select * from dbo.AdminCredentials where LoginID=@LoginID AND Password=@Password
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("NulandWebAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@LoginID", login.LoginID);
                    myCommand.Parameters.AddWithValue("@Password", login.Password);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            if (table!=null && table.Rows.Count >0)
            {
                return new Response { Status = "Success", Message = "Login Successfully" };
                //return new JsonResult("Login successfully");
            }
            else
            {
                return new Response { Status = "Invalid", Message = "Invalid User." };
                //return new JsonResult("Login failed");


            }

        }
    }
}