import { Controller, Get, Post, Header, HttpCode, Req, Param } from "@nestjs/common";
import { Request } from "express";

@Controller("cats")
export class CatsController {
  @Post()
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  create(): string {
    return "This action adds a new cat";
  }

  @Get()
  findAll(@Req() request: Request): string {
    return "This route uses a wildcard";
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action return a #${params.id} cat`
  }
}
