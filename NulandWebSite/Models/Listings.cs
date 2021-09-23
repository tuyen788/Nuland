using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nulandWebApp.Models
{
    public class Listings
    {
        public int ListingID { get; set; }
        public string Type { get; set; }
        public int Price { get; set; }
        public int Deposit { get; set; }
        public int Area { get; set; }
        public string Amenities { get; set; }

        public string Link { get; set; }

        public string PhotoFileName1 { get; set; }

        public string PhotoFileName2 { get; set; }
        public string PhotoFileName3 { get; set; }
        public string PhotoFileName4 { get; set; }
        public string PhotoFileName5 { get; set; }


       
        public string City { get; set; }

        

        public string Zipcode { get; set; }


        public string Policy { get; set; }


        public int Status { get; set; }

        public string AvailableDate { get; set; }
    }
}
