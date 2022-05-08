import React from "react";
import images from "./shared/images";


function Story (props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.image} alt=""/>
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>
    );
}

function Post (props) {
    const [like, setLike] = React.useState("heart-outline");
    const [classRed, setClassRed] = React.useState("");

    function clickLike () {
        if(like === "heart-outline"){
            setLike("heart");
            setClassRed("red")
        }else {
            setLike("heart-outline");
            setClassRed("")
        }
    };

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imageUser} alt=""/>
                    {props.nameUser}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.post} onClick={clickLike} alt=""/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div class={classRed}>
                        <ion-icon class="trocaCor" name={like} onClick={clickLike} ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imageComment} alt=""/>
                    <div class="texto">
                        Curtido por <strong>{props.whoLike}</strong> e <strong>{props.moreLike}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function BodyLeft () {

    const imgs = images;

    return (
        <div class="esquerda">
            <div class="stories">

                {imgs.contentStory.map(itens => <Story image={itens.image} name={itens.name} />)};

                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>

            <div class="posts">

                {imgs.contentPost.map(posts => <Post imageUser={posts.imageUser} nameUser={posts.nameUser} post={posts.post} imageComment={posts.imageComment} whoLike={posts.whoLike} moreLike={posts.moreLike} />)}
                
            </div>
        </div>
    );
}