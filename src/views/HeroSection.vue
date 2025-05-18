<template>
    <div class="hero-section">
        <div class="main-wrapper">
            <div class="left-wrapper"></div>
            <div class="right-wrapper"></div>
        </div>
        <div class="hero-section-container">
            <div class="hero-section-content">
                <div class="hero-section-content-left">
                    <div class="hero-section-content-left-container">
                        <img class="hero-section-content-left-logo" src="../assets/logo.png" alt="hero-section-logo">
                        <MainHeader value="АДВОКАТ" class="hero-section-content-left-title" />
                        <p class="hero-section-content-left-description">Консультации по украинскому и международному
                            праву
                            — в том числе по вопросам миграции, проживания, гражданства, виз и воссоединения семьи в
                            Германии</p>


                        <button class="hero-section-content-left-button">
                            <span>Записаться</span>
                        </button>

                        <div class="hero-section-content-email">
                            <img src="../assets/icons/mail.svg" alt="hero-section-email">
                            <a href="mailto:info@advokat-kiev.com">info@advokat-kiev.com</a>
                        </div>
                    </div>
                    <div class="hero-section-content-right">
                        <div class="hero-section-content-right-image">
                            <img src="../assets/main.jpg" alt="hero-section-image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MainHeader from '../components/header/MainHeader.vue';
</script>

<style scoped>
.main-wrapper {
    height: 870px;
    display: flex;
    position: relative;
}

.left-wrapper {
    height: 870px;
    width: 66%;
    background-color: #fff;
    border: 10px solid #E3E3E3;
}

.right-wrapper {
    height: 870px;
    width: 34%;
    background: linear-gradient(180deg, #97AFBA 0%, #658898 100%);
    border: 10px solid #E3E3E3;
    border-left: none;
}

.hero-section {
    width: 100%;
    /* max-width: 1170px; */
    /* margin-left: auto;
    margin-right: auto; */
    background-color: #fff;
    margin-top: -10px;
}

.hero-section-content {
    position: absolute;
    top: 0;
    max-width: 1170px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
}

.hero-section-content-left {
    padding-top: 114px;
    max-width: 1170px;
    width: 100%;
    /* border-right: 10px solid #E3E3E3;
    border-top: 10px solid #E3E3E3; */
    /* margin-left: auto;
    margin-right: auto; */
    display: flex;
}

.hero-section-content-left-container {
    max-width: 690px;
    width: 100%;
}

.hero-section-content-right {
    max-width: 578px;
    /* position: relative;
    padding-top: 114px;
    background: linear-gradient(180deg, #97AFBA 0%, #658898 100%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center; */
    /* border-top: 10px solid #E3E3E3; */
}

.hero-section-content-left-logo {
    display: block;
}

.hero-section-content-left-title {
    margin-top: 43px;
    height: 105px;
    display: block;
}

.hero-section-content-left-description {
    /* margin-top: -10px; */
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 22px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #2A2A2D;
    max-width: 412px;
    width: 100%;
}

.hero-section-content-left-button {
    margin-top: 76px;
    background-color: #658898;
    max-width: 270px;
    width: 100%;
    height: 50px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    font-style: italic;
}

.hero-section-content-left-button:hover {
    background-color: #456676;
}

.hero-section-content-left-button span {
    font-style: italic !important;
}


.hero-section-content-email {
    margin-top: 239px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 110px;

}

.hero-section-content-email a {
    color: #2A2A2D;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 22px;
    line-height: 22px;
}


.hero-section-content-right img {
    z-index: 3;
    /* position: relative; */
    /* left: -100px;
    top: -57px; */
    width: 100%;

    background: transparent;
}

.hero-section-content-right-image {}

.services-section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 10px;
  margin-top: 40px;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
}

.service-block {
  background: #fff;
  border: 1px solid #2A2A2D;
  padding: 32px 24px 24px 24px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  position: relative;
}

.service-block-header {
  font-weight: 500;
  font-size: 20px;
  padding: 16px 0;
  margin: -32px -24px 24px -24px;
  text-align: center;
}

.block-germany .service-block-header {
  background: #222;
  color: #fff;
}

.block-ukraine .service-block-header {
  background: linear-gradient(90deg, #97AFBA 0%, #658898 100%);
  color: #fff;
}

.service-block ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-block ul li {
  position: relative;
  padding-left: 32px;
  margin-bottom: 16px;
  color: #222;
}

.block-germany ul li::before {
  content: "✔";
  color: #222;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 18px;
}

.block-ukraine ul li::before {
  content: "✔";
  color: #97AFBA;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 18px;
}
</style>
