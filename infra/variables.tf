variable "app_name" {
  default = "nextjs-fullstack-boilerplate"
}
variable "env" {
  default = "dev"
}



#--------------------------------------------------------------
# AWS
#--------------------------------------------------------------
variable "aws_sso_profile" {}

variable "aws_region" {
  default = "ap-northeast-1"
}

variable "aws_vpc_cidr" {
  default = "10.0.0.0/16"
}

variable "aws_db_name" {}

variable "aws_db_username" {}

variable "aws_db_engine" {
  default = "postgres"
}

variable "aws_db_engine_version" {
  default = "16.3"
}

variable "aws_db_instance" {
  default = "db.m5d.large"
}

