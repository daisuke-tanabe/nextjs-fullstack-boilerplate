terraform {
  required_version = "= 1.9.3"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.61.0"
    }
  }
}

provider "aws" {
  profile = var.aws_sso_profile
  region  = var.aws_region

  default_tags {
    tags = {
      env = "dev"
    }
  }
}

resource "aws_vpc" "this" {
  cidr_block = var.aws_vpc_cidr
  tags = {
    name = "${var.app_name}-vpc"
  }
}

resource "aws_s3_bucket" "bucket-image" {
  bucket = "${var.app_name}-${var.env}-images-${var.aws_sso_profile}"
  tags = {
    name = "${var.app_name}-s3"
  }
}
