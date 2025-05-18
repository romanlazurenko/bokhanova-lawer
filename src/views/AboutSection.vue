<template>
    <div class="about-section">
        <div class="main-wrapper"></div>
        <div class="about-section-container">
            <div class="about-section-content">
                <MainHeader value="ОБО МНЕ" class="about-section-content-title" />
            </div>
            <div class="about-section-grid">
                <div class="grid-item item1">
                    <img src="../assets/vesi.png" alt="about-img1" class="about-img1">
                    <div class="top-text">
                        Более 10 лет юридической практики.
                        Опора на точность, ответственность и результат.
                    </div>
                </div>
                <div class="grid-item item2">
                    <div class="top-text">
                        Профессиональная деятельность в Германии и Украине
                    </div>
                </div>
                <div class="grid-item item3">
                    <img src="../assets/molotok.png" alt="about-img1" class="about-img2">
                    <div class="grid-item-title">Адвокат, зарегистрированнаяв Адвокатской палате Мюнхена
                        (Rechtsanwaltskammer München)</div>
                    <div class="grid-item-text">
                        <p>Правовая поддержка для украинских и русскоязычных клиентов по вопросам миграции, виз,
                            проживания, гражданства и адаптации
                            в Германии.</p>
                    </div>
                </div>
                <div class="grid-item item4">
                    <div class="bottom-text">
                        Консультации на русском,украинском и немецком языках.
                        Каждое дело сопровождается с максимальной вовлечённостью и вниманием к деталям.
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
.about-section {
    position: relative;
}

.main-wrapper {
    height: 675px;
    display: flex;
    position: relative;
    border: 10px solid #E3E3E3;
    border-top: none;
}

.about-img1,
.about-img2 {
    width: 100px;
    height: 100px;
}

.about-img1,
.about-img2 {
    position: absolute;
    top: -50px;
    transform: translateX(-50%);
    left: 50%;
}

.about-section-container {
    max-width: 1170px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: -10px;
}

.about-section-content {
    padding-top: 114px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
}

.about-section-grid div {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 22px;
    line-height: 22px;
    letter-spacing: 0.02em;
}

.about-section-content-title {
    margin-top: 0;
}

.about-section-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
    margin-top: 120px;
}

.grid-item {
    padding: 24px;
    /* border-radius: 4px; */
}

.bottom-text {
    /* margin-top: 75px; */
    width: 510px;
    text-align: center;
    background: #2a2a2d49;
    padding: 30px 30px;
    border-radius: 100px;
}


.grid-item-title {
    margin-top: 75px;
}

.top-text {
    margin-top: 75px;
}

.item1 {
    position: relative;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    background: linear-gradient(90deg, #97AFBA 0%, #658898 100%);
    color: #fff;
    height: 260px;
    text-align: center;
}

.item2 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    background: #fff;
    color: #222;
    border: 1px solid #2A2A2D;
    height: 260px;

    display: flex;
    flex-direction: column;

    /* justify-content: center; */
    text-align: center;
    padding: 24px;
}

.item3 {
    position: relative;
    grid-column: 3 / 4;
    grid-row: 1 / 3;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 24px;
    background-image: url('../assets/bg2.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.item4 {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    background: #BFC3C6;
    color: #fff;
    padding: 24px;
    background-image: url('../assets/bg1.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
