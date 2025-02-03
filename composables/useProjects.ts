export default function useProjects() {
    const projects = ref([
        {
            title: "タイピングゲーム",
            description: "Pythonの授業でタイピングゲームを作成しました。\n\n画面に表示された日本語をローマ字でタイピングしていきます。\n一定時間内に何単語タイプできるかを競うゲームです。\n\n入力されたローマ字を一文字ずつ判定しているので少し大変でした。"
        },
        {
            title: "ポートフォリオサイト",
            description: "Web基礎の授業でNextJSを使ってポートフォリオサイトを作成しました。\n\nこのサイトでは、私のスキルや資格、成果物などを紹介しています。\n今後は、このサイトを更新していきたいです。"
        },
        {
            title: "おみくじゲーム",
            description: "Pythonの授業でおみくじゲームを作成しました。\n\nおみくじボタンを押すと、ランダムでおみくじの結果が表示されます。\nおみくじの結果によって、表示される画像が異なります。"
        },
        {
            title: "About-Me",
            description: "Web基礎の授業でHTML,CSS,JavaScriptを使って自己紹介ページを作成しました。\n\nこのページでは、私の自己紹介や経歴、好きなものなどを紹介しています。\n初めての成果物になります。"
        }
    ]);

    return { projects };
}
