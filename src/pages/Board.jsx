import { Outlet, NavLink } from "react-router-dom";

const Board = () => {

    const pageList=[1,2,3,4,5];

    return (
        <div>
            <h1>Board</h1>
            <p>파라미터 및 중첩 라우트를 사용해 아래 board의 내용이 보입니다</p>
                {
                    pageList.map((page,index)=>(
                        <NavLink key={index} to={`/board/${page}`} >
                            {page}
                        </NavLink>
                    ))
                }
            <Outlet/>
        </div>
    );
};

export default Board;