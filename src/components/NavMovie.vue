<template>
    <div class="accordion">
        <ul>
            <li>
                <div class="image_title">
                    <a href="#">Dark</a>
                </div>
                <a href="#"><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dark-temporada-3-fecha-estreno-netflix-1590478686.jpeg?crop=0.945xw:0.945xh;0,0&resize=640:*"  border="0"></a>
            </li>
            <li>
                <div class="image_title">
                    <a href="#">The Simpsons</a>
                </div>
                <a href="#"><img src="https://los40ar00.epimg.net/los40/imagenes/2020/04/13/cine/1586793878_761024_1586795139_noticia_normal.jpg"  border="0"></a>
            </li>
            <li>
                <div class="image_title">
                    <a href="#">La casa de papel</a>
                </div>
                <a href="#"><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/la-casa-de-papel-temporada-4-1576584408.jpg?crop=1xw:0.8888888888888888xh;center,top&resize=640:*"  border="0"></a>
            </li>
            <li>
                <div class="image_title">
                    <a href="#">Чернобыль</a>
                </div>
                <a href="#"><img src="https://3.bp.blogspot.com/-wqBWqmk23ng/VypuRE1dtsI/AAAAAAAAArQ/TCiH-x64PgEQcRxZIye6Up1qQWSQKpJRQCKgB/s640/2%2B%252828%2529.jpg" border="0"></a>
            </li>
            <li>
                <div class="image_title">
                    <a href="#">Malcolm in the Middle</a>
                </div>
                <a href="#"><img src="https://media.comicbook.com/2019/11/malcolm-in-the-middle-1195594-640x320.jpeg" border="0"></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>
* {
    margin: 0; 
    padding: 0;
}



.accordion {
    width: 800px; height: 320px;
    overflow: hidden;
    margin: 100px auto;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);
}

.accordion ul {
    width: 2000px;
}

.accordion li {
    position: relative;
    display: block;
    width: 160px;
    float: left;
    border-left: 1px solid #888;
    box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.5s;
}

.accordion ul:hover li {width: 40px;}
.accordion ul li:hover {width: 640px;}
.accordion li img {
    display: block;
}

.image_title {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0; bottom: 10px;  
  width: 640px; 

}
.image_title a {
    display: block;
  text-align: center; 
    color: #fff;
    text-decoration: none;
    padding: 20px;
}

@keyframes BobbySnuggles {
  0% {
    opacity: 0;
    transform: rotate(15deg) scale(0);
  }
  100% {
    opacity: 1; 
    transform: rotate(0deg) scale(1);
  }
}

@media screen and (max-width: 500px) {
  nav {
    background: pink; 
  }
}
</style>