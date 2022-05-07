import images from "./shared/images";

function UserAside (props) {
    return (
        <div class="usuario">
            <img src={props.image} />
            <div class="texto">
                <strong>{props.userNick}</strong>
                {props.name}
            </div>
        </div>
    )
}

function Sugests (props){
    return (
        <div class="sugestao">
            <div class="usuario">
            <img src={props.image} />
            <div class="texto">
                <div class="nome">{props.name}</div>
                <div class="razao">Segue você</div>
            </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

export default function Asidebar () {

    const aside = images;

    return (
        <div class="sidebar">

            {aside.user.map(userId => <UserAside image={userId.image} userNick={userId.nickName} name={userId.name} />)}

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {aside.sugests.map(sugest => <Sugests image={sugest.image} name={sugest.name} />)}

            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
      </div>
    )
}