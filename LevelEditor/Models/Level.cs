using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Editor.Models
{
    public class Level
    {
        [Key]
        public int LevelId { get; set; }
        public string Title { get; set; }
        public string Data { get; set; }
        //public int UserId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual ICollection<Statistic> Statistics { get; set; }
        public virtual User User { get; set; }
    }
}