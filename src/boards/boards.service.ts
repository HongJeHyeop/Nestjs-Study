import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;

    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id);

    // 찾으려는 게시물이 없다면 에러 발생
    if(!found) {
      throw new NotFoundException(`Cna't find Board with id ${id}`);
    }
    return found;
  } 

  // 게시물 삭제
  deleteBoard(id: string): void {
    const found = this.getBoardById(id);

    this.boards = this.boards.filter((board) => board.id !== found.id);
  }


  // 게시물 수정
  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board
  }

}

