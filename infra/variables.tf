variable "app_name" {
  default = "nextjs-fullstack-boilerplate"
}
variable "env" {
  default = "dev"
}

# aws
variable "aws_sso_profile" {}

variable "aws_region" {
  default = "ap-northeast-1"
}

variable "aws_vpc_cidr" {
  default = "10.0.0.0/16"
}

