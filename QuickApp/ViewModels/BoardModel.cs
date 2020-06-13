using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickApp.ViewModels
{
    public class BoardModel
    {
        public string controller = "Board";
        public ViewType viewType {get; set;}
        public ViewTypeAttribute[] viewTypeAttributes {get; set;}
        public Project project {get; set;}
        public Piece[] projectPieces {get; set;}
    }
}
