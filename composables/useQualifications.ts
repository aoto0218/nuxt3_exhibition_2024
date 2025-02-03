export const useQualifications = () => {
    const qualifications = [
        {
            name: 'MOS PowerPoint',
            description: [
                'Microsoft Office Specialist PowerPointの試験に受験し、合格しました。',
                'この資格は、PowerPointの基本的な操作方法を理解していることを証明する資格です。',
                '今後もExcelの試験などに受験し、資格を取得していきたいです。'
            ]
        },
        {
            name: 'AI-900',
            description: [
                'Microsoft Azure AI Fundamentalsの試験に受験し、合格しました。',
                'この資格は、AzureのAIサービスを理解していることを証明する資格です。',
                '今後は、AzureのAIサービスを活用したアプリケーションの開発を行いたいです。'
            ]
        }
    ];

    return { qualifications };
};