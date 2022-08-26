import { Todo } from '@prisma/client';

export class TodoEntity implements Todo {
  id: number;
  description: string;
}
