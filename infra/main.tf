terraform {
  required_version = "1.9.7"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.69.0"
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

#--------------------------------------------------------------
# VPC
#--------------------------------------------------------------
# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc
resource "aws_vpc" "this" {
  cidr_block = var.aws_vpc_cidr
  tags = {
    Name = "${var.app_name}-vpc"
    name = "${var.app_name}-vpc"
  }
}

resource "aws_internet_gateway" "this" {
  vpc_id = aws_vpc.this.id
  tags = {
    Name = "${var.app_name}-igw"
    name = "${var.app_name}-igw"
  }
}

resource "aws_subnet" "public_subnet_1a" {
  vpc_id                  = aws_vpc.this.id
  availability_zone       = "${var.aws_region}a"
  cidr_block              = cidrsubnet(var.aws_vpc_cidr, 8, 11)
  tags = {
    Name = "${var.app_name}-public-subnet-1a"
    name = "${var.app_name}-public-subnet"
  }
}

resource "aws_subnet" "public_subnet_1c" {
  vpc_id                  = aws_vpc.this.id
  availability_zone       = "${var.aws_region}c"
  cidr_block              = cidrsubnet(var.aws_vpc_cidr, 8, 12)
  tags = {
    Name = "${var.app_name}-public-subnet-1c"
    name = "${var.app_name}-public-subnet"
  }
}

resource "aws_subnet" "private_subnet_1a" {
  vpc_id                  = aws_vpc.this.id
  availability_zone       = "${var.aws_region}a"
  cidr_block              = cidrsubnet(var.aws_vpc_cidr, 8, 21)
  tags = {
    Name = "${var.app_name}-private-subnet-1a"
    name = "${var.app_name}-private-subnet"
  }
}

resource "aws_subnet" "private_subnet_1c" {
  vpc_id                  = aws_vpc.this.id
  availability_zone       = "${var.aws_region}c"
  cidr_block              = cidrsubnet(var.aws_vpc_cidr, 8, 22)
  tags = {
    Name = "${var.app_name}-private-subnet-1c"
    name = "${var.app_name}-private-subnet"
  }
}

#--------------------------------------------------------------
# Security group
#--------------------------------------------------------------
# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group
resource "aws_security_group" "this" {
  name        = "${var.app_name}-rds-sg"
  description = "RDS service security group for ${var.app_name}"
  vpc_id      = aws_vpc.this.id
  tags = {
    Name = "${var.app_name}-rds-sg"
    name = "${var.app_name}-sg"
  }
}
# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group_rule
resource "aws_security_group_rule" "rds_ingress_mysql" {
  type              = "ingress"
  from_port         = 5432
  to_port           = 5432
  protocol          = "tcp"
  cidr_blocks       = [aws_vpc.this.cidr_block]
  security_group_id = aws_security_group.this.id
}

#--------------------------------------------------------------
# Subnet group
#--------------------------------------------------------------
# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/db_subnet_group
resource "aws_db_subnet_group" "this" {
  name        = var.app_name
  description = "rds subnet group for ${var.aws_db_name}"
  subnet_ids  = [aws_subnet.private_subnet_1a.id, aws_subnet.private_subnet_1c.id]
}

#--------------------------------------------------------------
# ECR
#--------------------------------------------------------------
# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecr_repository
resource "aws_ecr_repository" "default" {
  name                 = var.app_name
  image_tag_mutability = "MUTABLE"
  tags = {
    name = "${var.app_name}-ecr"
  }
  image_scanning_configuration {
    scan_on_push = true
  }
}

#--------------------------------------------------------------
# RDS
#--------------------------------------------------------------
# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/db_instance
resource "aws_db_instance" "database" {
  db_name                     = "postgres"
  allocated_storage           = 20
  storage_type                = "gp2"
  engine                      = var.aws_db_engine
  engine_version              = var.aws_db_engine_version
  instance_class              = var.aws_db_instance
  identifier                  = var.aws_db_name
  username                    = var.aws_db_username
  manage_master_user_password = true
  skip_final_snapshot         = true
  vpc_security_group_ids      = [aws_security_group.this.id]
  db_subnet_group_name        = aws_db_subnet_group.this.name
  tags = {
    name = "${var.app_name}-rds"
  }
}

#--------------------------------------------------------------
# S3
#--------------------------------------------------------------
# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket
resource "aws_s3_bucket" "bucket-image" {
  bucket = "${var.app_name}-${var.env}-images-${var.aws_sso_profile}"
  tags = {
    name = "${var.app_name}-s3"
  }
}
