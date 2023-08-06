import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
    constructor(private boardService: BoardsService) {}

    // @Get()
    // getAllBoard(): Board[] {
    //     console.log('getAllBoard');
        
    //     return this.boardService.getAllBoards();
    // }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createBoard(
    //     @Body() createBoardDto: CreateBoardDto
    //     ): Board {
           
    //     return this.boardService.createBoard(createBoardDto);

    // }


    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
        return this.boardService.createBoard(createBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id:number): Promise<Board> {
        return this.boardService.getBoardById(id);
    }

    // @Get('/:id')
    // getBoardBuId(@Param('id') id: string): Board {
    //     console.log(id);
    //     return this.boardService.getBoardById(id); 
    // }


    // // 게시물 삭제
    // @Delete('/:id')
    // deleteBoard(@Param('id') id: string): void {
    //     this.boardService.deleteBoard(id);
    // }
    
    // // 게시물 수정
    // @Patch('/:id/status')
    // updateBoardStatus(
    //     @Param('id') id: string,
    //     @Body('status', BoardStatusValidationPipe) status: BoardStatus
    // ) {
    //     return this.boardService.updateBoardStatus(id, status);
    // }
    
}
