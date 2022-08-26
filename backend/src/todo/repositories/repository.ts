import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { TodoEntity } from '../entities/todo.entity';

@Injectable()
export class TodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
    return this.prisma.todo.create({
      data: createTodoDto,
    });
  }

  async findAll(): Promise<TodoEntity[]> {
    return this.prisma.todo.findMany();
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.prisma.todo.update({
      where: { id },
      data: updateTodoDto,
    });
  }

  async remove(id: number) {
    return this.prisma.todo.delete({
      where: {
        id,
      },
    });
  }
}
