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

resource "aws_internet_gateway" "this" {
  vpc_id = aws_vpc.this.id
  tags = {
    name = "${var.app_name}-igw"
  }
}

resource "aws_subnet" "public_subnet_1a" {
  vpc_id                  = aws_vpc.this.id
  availability_zone       = "${var.aws_region}a"
  cidr_block              = cidrsubnet(var.aws_vpc_cidr, 8, 11)
  tags = {
    name = "${var.app_name}-public-subnet-1a"
  }
}

resource "aws_subnet" "public_subnet_1c" {
  vpc_id                  = aws_vpc.this.id
  availability_zone       = "${var.aws_region}c"
  cidr_block              = cidrsubnet(var.aws_vpc_cidr, 8, 12)
  tags = {
    name = "${var.app_name}-public-subnet-1c"
  }
}

resource "aws_subnet" "private_subnet_1a" {
  vpc_id                  = aws_vpc.this.id
  availability_zone       = "${var.aws_region}a"
  cidr_block              = cidrsubnet(var.aws_vpc_cidr, 8, 21)
  tags = {
    name = "${var.app_name}-private-subnet-1a"
  }
}

resource "aws_subnet" "private_subnet_1c" {
  vpc_id                  = aws_vpc.this.id
  availability_zone       = "${var.aws_region}c"
  cidr_block              = cidrsubnet(var.aws_vpc_cidr, 8, 22)
  tags = {
    name = "${var.app_name}-private-subnet-1c"
  }
}

resource "aws_s3_bucket" "bucket-image" {
  bucket = "${var.app_name}-${var.env}-images-${var.aws_sso_profile}"
  tags = {
    name = "${var.app_name}-s3"
  }
}
