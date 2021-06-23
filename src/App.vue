<template>
<div id="app" :style="{backgroundColor: backgroundColor}">
    <div class="container">
        <div class="moon col">
            <i class="far fa-moon pointer" :class="{ fas: DarkMode , far: !DarkMode }" :style="{color:color}" @click="darkCounter"></i>
        </div>
        <div class="photo col">
            <img src="@/assets/hero.jpg">
            <h3 class="mt-1m" :style="{color:color}">Emirhan Irmak</h3>
        </div>
        <div class="about col" :style="{color:color}">
            <h1>Hakkımda</h1>
            <p>Merhaba ben Emirhan, 18 yaşındayım. Teknik lise elektronik bölümü mezunuyum.
                Hobi Devreleri, Web uygulamaları ve tasarımları ile ilgilenmekteyim. Vue js ve adobe xd ilgi alanlarımdan birkaçı.
                Yeni projeler ve fikirler geliştirmek motivasyon alanım.</p>
            <button class="btn primary" onclick="window.location.href='https://irmak.dev' ">Blog Sitem</button>

        </div>

        <div class="icons col">
            <div class="icons-container">
                <a href=""><i class="fab fa-youtube" :style="{color:color}"></i></a>
                <a href="https://instagram.com/nerawn"><i class="fab fa-instagram" :style="{color:color}"></i></a>
                <a href="https://github.com/nerawn"><i class="fab fa-github" :style="{color:color}"></i></a>
                <a href="https://twitter.com/nerawn_"><i class="fab fa-twitter" :style="{color:color}"></i></a>
                <a href="mailto:emirhan@irmak.dev"><i class="far fa-envelope" :style="{color:color}"></i></a>
            </div>
        </div>

        <div class="vue col">
            <i class="fab fa-vuejs"></i>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            DarkMode: false,
            backgroundColor: 'white',
            color: '#090811',
            dark: 0
        }
    },

    watch: {
        dark(val) {
            if (val == 0) {
                this.DarkMode = false
                this.backgroundColor = 'white',
                    this.color = '#090811'

            }
            if (val == 1) {
                this.DarkMode = true,
                    this.backgroundColor = '#090811',
                    this.color = 'white'
            }

        },
        DarkMode(value) {
            if (value == true)
                this.backgroundColor = '#090811',
                this.color = 'white'
        }

    },
    methods: {
        darkCounter() {
            this.dark++
            if (this.dark == 2)
                this.dark = 0

        }
    },

}
</script>

<style lang="scss">
#app {
    font-family: 'Poppins';
    display: grid;
    justify-content: center;
    background-color: #090811;

    .container {
        width: 768px;
        display: grid;
        grid-template-rows: repeat(7, 1fr);
        height: 100vh;
        grid-gap: 10px;
        color: white;

        .col {
            display: grid;
            width: 720px;
            margin-left: auto;
            margin-right: auto;

        }
    }

    .moon {
        place-items: center flex-end;
        margin-left: auto;
        margin-right: auto;
        font-size: 20px;
    }

    .photo {

        place-items: flex-start center;
        font-size: 20px;

        img {
            width: 200px;
            height: 200px;
            border-radius: 100%;
        }
    }

    .about {
        place-items: center center;
        padding: 1em;
        margin-top: 0.5em;
        background-color: #44739941;
        border-radius: 10px;
        grid-row-start: 3;
        grid-row-end: 5;

        h1 {
            font-size: 25px;
            font-weight: 600;
        }

        p {
            font-weight: 300;
            line-height: 1.5;
            font-size: 16px;
            text-align: center;

        }

        .btn {
            width: 30%;
            letter-spacing: 0.5px;
            color: white;
            font-weight: 500;
            font-family: 'Poppins';
        }
    }

    .icons {
        place-items: center;

        .icons-container {
            font-size: 25px;
            display: flex;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            column-gap: 1.5em;

            i {
                cursor: pointer;
                color: white;
            }

            a {
                color: white;
            }

        }
    }

    .vue {
        place-items: center;
        color: #3bc765ab;
    }
}

@media screen and (max-width:576px) {
    .container {
        width: 320px !important;
        height: 100%;

        .col {
            width: 320px !important;
        }

        .photo {
            img {
                width: 150px !important;
                height: 150px !important;
            }
        }

        .about {
            grid-row-start: 3 !important;
            grid-row-end: 6 !important;

            p {
                font-size: 13px !important;
            }

            .btn {
                width: 60% !important;
            }
        }

        .vue {
            place-items: flex-start center !important;
            grid-template-rows: 50px;
            color: #3bc765ab;
        }
    }

}
</style>
