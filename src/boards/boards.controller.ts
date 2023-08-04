import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardService: BoardsService) {}

    @Get()
    getAllBoard(): Board[] {
        console.log('getAllBoard');
        
        return this.boardService.getAllBoards();
    }

    @Post()
    createBoard(
        @Body() createBoardDto: CreateBoardDto
        ): Board {
           
        return this.boardService.createBoard(createBoardDto);

    }

    @Get('/:id')
    getBoardBuId(@Param('id') id: string): Board {
        console.log(id);
        return this.boardService.getBoardById(id); 
    }


    // 게시물 삭제
    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void {
        this.boardService.deleteBoard(id);
    }
    
    // 게시물 수정
    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status') status: BoardStatus
    ) {
        return this.boardService.updateBoardStatus(id, status);
    }
}
