const defaultDataset = {
  "init": {
      answers: [
          {content: "仕事を依頼したい", nextId: "job_offer"},
          {content: "ナカノエイジについて知りたい", nextId: "about_me"},
          {content: "仲良くなりたい", nextId: "dating"},
      ],
      question: "こんにちは！ご用件はなんでしょうか？",
  },
  "job_offer": {
      answers: [
          {content: "Webサイトを制作してほしい", nextId: "website"},
          {content: "Webアプリを開発してほしい", nextId: "webapp"},
          {content: "その他", nextId: "other_jobs"}
      ],
      question: "どのようなお仕事でしょうか？",
  },
  "website": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Webサイト細作についてですね。コチラからお問い合わせできます。",
  },
  "webapp": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Webアプリ開発についてですね。コチラからお問い合わせできます。",
  },
  "other_jobs": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "その他についてですね。コチラからお問い合わせできます。",
  },
  "about_me": {
      answers: [
          {content: "自己紹介ページを見る", nextId: "https://about-me-420a5.web.app/"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "過去の経歴やポートフォリオ等を自己紹介サイトで掲載しております！",
  },
  "dating": {
      answers: [
          {content: "DMする", nextId: "https://twitter.com/programike"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "飲みに行きましょう！DMしてください😘",
  },
}

export default defaultDataset