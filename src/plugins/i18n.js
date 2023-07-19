
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n) //Vue에게 i18n 을 사용하겠다고 명시

const messages = {
    ko: {
        "textBanana": "바나나",
        "textApple": "사과",

    },
    en: {
        "textBanana": "Banana",
            "textApple": "Apple",

    },
    jp:{
        "textBanana": "バナナ.",
        "textApple": "リンゴ",
    },

}

export const i18n = new VueI18n({
    locale: 'ko', // 기본 언어
    fallbackLocale: 'en , jp',  // 기본 언어 표시에 문제가 있을 경우 대체할 언어
    messages,
})