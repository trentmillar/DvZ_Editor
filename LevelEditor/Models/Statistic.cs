using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Editor.Models
{
    public class Statistic
    {
        [Key]
        public int StatisticId { get; set; }
        //public int LevelId { get; set; }
        //public int UserId { get; set; }
        public bool Complete { get; set; }
        public int Stars { get; set; }
        public int Score { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual User User { get; set; }
        public virtual Level Level { get; set; }
    }
}