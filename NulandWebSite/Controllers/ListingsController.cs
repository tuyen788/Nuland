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

namespace nulandWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListingsController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly Microsoft.AspNetCore.Hosting.IWebHostEnvironment _env;
        public ListingsController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }


        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select ListingID,Type,Price,Amenities,Link,Policy,Status,Street,City,State,Zipcode,convert(varchar(10),AvailableDate,120) as AvailableDate,PhotoFileName1,PhotoFileName2,PhotoFileName3,PhotoFileName4,PhotoFileName5
                            from
                            dbo.Listings
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("NulandWebAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Listings list)
        {
            string query = @"
                           insert into dbo.Listings
                           (Type,Price,Amenities,Link,Policy,Status,Street,City,State,Zipcode,AvailableDate,PhotoFileName1,PhotoFileName2,PhotoFileName3,PhotoFileName4,PhotoFileName5)
                    values (@Type,@Price,@Amenities,@Link,@Policy,@Status,@Street,@City,@State,@Zipcode,@AvailableDate,@PhotoFileName1,@PhotoFileName2,@PhotoFileName3,@PhotoFileName4,@PhotoFileName5)
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("NulandWebAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Type", list.Type);
                    myCommand.Parameters.AddWithValue("@Price", list.Price);
                    myCommand.Parameters.AddWithValue("@Amenities", list.Amenities);
                    myCommand.Parameters.AddWithValue("@Link", list.Link);
                    myCommand.Parameters.AddWithValue("@Policy", list.Policy);
                    myCommand.Parameters.AddWithValue("@Status", list.Status);
                    myCommand.Parameters.AddWithValue("@Street", list.Street);
                    myCommand.Parameters.AddWithValue("@City", list.City);
                    myCommand.Parameters.AddWithValue("@State", list.State);
                    myCommand.Parameters.AddWithValue("@Zipcode", list.Zipcode);
                    myCommand.Parameters.AddWithValue("@AvailableDate", list.AvailableDate);
                    myCommand.Parameters.AddWithValue("@PhotoFileName1", list.PhotoFileName1);
                    myCommand.Parameters.AddWithValue("@PhotoFileName2", list.PhotoFileName2);
                    myCommand.Parameters.AddWithValue("@PhotoFileName3", list.PhotoFileName3);
                    myCommand.Parameters.AddWithValue("@PhotoFileName4", list.PhotoFileName4);
                    myCommand.Parameters.AddWithValue("@PhotoFileName5", list.PhotoFileName5);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }


        [HttpPut]
        public JsonResult Put(Listings list)
        {
            string query = @"
                           update dbo.Listings
                           set Type=@Type,Price=@Price,Amenities=@Amenities,Link=@Link,Policy=@Policy,Status=@Status,Street=@Street,City=@City,State=@State,Zipcode=@Zipcode,AvailableDate=@AvailableDate,PhotoFileName1=@PhotoFileName1,PhotoFileName2=@PhotoFileName3,PhotoFileName3=@PhotoFileName3,PhotoFileName4=@PhotoFileName4,PhotoFileName5=@PhotoFileName5
                            where ListingID=@ListingID
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("NulandWebAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ListingID", list.ListingID);
                    myCommand.Parameters.AddWithValue("@Type", list.Type);
                    myCommand.Parameters.AddWithValue("@Price", list.Price);
                    myCommand.Parameters.AddWithValue("@Amenities", list.Amenities);
                    myCommand.Parameters.AddWithValue("@Link", list.Link);
                    myCommand.Parameters.AddWithValue("@Policy", list.Policy);
                    myCommand.Parameters.AddWithValue("@Status", list.Status);
                    myCommand.Parameters.AddWithValue("@Street", list.Street);
                    myCommand.Parameters.AddWithValue("@City", list.City);
                    myCommand.Parameters.AddWithValue("@State", list.State);
                    myCommand.Parameters.AddWithValue("@Zipcode", list.Zipcode);
                    myCommand.Parameters.AddWithValue("@AvailableDate", list.AvailableDate);
                    myCommand.Parameters.AddWithValue("@PhotoFileName1", list.PhotoFileName1);
                    myCommand.Parameters.AddWithValue("@PhotoFileName2", list.PhotoFileName2);
                    myCommand.Parameters.AddWithValue("@PhotoFileName3", list.PhotoFileName3);
                    myCommand.Parameters.AddWithValue("@PhotoFileName4", list.PhotoFileName4);
                    myCommand.Parameters.AddWithValue("@PhotoFileName5", list.PhotoFileName5);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                           delete from dbo.Listings
                            where ListingID=@ListingID
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("NulandWebAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ListingID", id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }


        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {

                return new JsonResult("default.jpg");
            }
        }

    }
}
