import React from "react";

function Book(props) {
    return(
        <div>
            <h1>책 이름 : {props.name} , 총 페이지 : {props.numOfPage} </h1>
            <br />
        </div>
    );
}

export default Book;