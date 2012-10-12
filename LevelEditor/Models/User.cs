using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Editor.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string EncryptedPassword { get; set; }
        public string ResetPasswordToken { get; set; }
        public string RememberToken { get; set; }
        public DateTime RememberCreatedAt { get; set; }
        public int SignInCount { get; set; }
        public DateTime CurrentSignInAt { get; set; }
        public DateTime LastSignInAt { get; set; }
        public string CurrentSignInIp { get; set; }
        public string LastSignInIp { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual ICollection<Level> Levels { get; set; }
        public virtual ICollection<Statistic> Statistics { get; set; }
    }
}