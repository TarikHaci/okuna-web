export class ModalType {
    static post = new ModalType('Post');
    static postReactions = new ModalType('PostReactions');
    static postActions = new ModalType('PostActions');
    static postCommentReactions = new ModalType('PostCommentReactions');
    static communitiesList = new ModalType('CommunitiesList');
    static reportObject = new ModalType('ReportObject');
    static userActions = new ModalType('UserActions');
    static communityActions = new ModalType('CommunityActions');
    static hashtagActions = new ModalType('HashtagActions');
    static postCommentActions = new ModalType('PostCommentActions');
    static connectionsCirclesPicker = new ModalType('ConnectionsCirclesPicker');
    static termsOfUse = new ModalType('TermsOfUse');
    static privacyPolicy = new ModalType('PrivacyPolicy');
    static communityGuidelines = new ModalType('PrivacyPolicy');
    static themes = new ModalType('Themes');
    static settings = new ModalType('Settings');
    static applicationSettings = new ModalType('ApplicationSettings');
    static userSettings = new ModalType('UserSettings');
    static userProfileSettings = new ModalType('UserProfileSettings');
    static userVisibilitySettings = new ModalType('UserVisibilitySettings');
    static imageCropper = new ModalType('ImageCropper');
    static userFollowings = new ModalType('UserFollowings');
    static userFollowers = new ModalType('UserFollowers');
    static welcomeToOkunaWeb = new ModalType('WelcomeToOkunaWeb');
    static getTheApp = new ModalType('GetTheApp');
    static communityRules = new ModalType('CommunityRules');
    static communityStaff = new ModalType('CommunityStaff');
    static postStudio = new ModalType('createPost');


    static _values: ModalType[] = [
        ModalType.post,
        ModalType.postReactions,
        ModalType.communitiesList,
        ModalType.postActions,
        ModalType.reportObject,
        ModalType.userActions,
        ModalType.communityActions,
        ModalType.postCommentActions,
        ModalType.connectionsCirclesPicker,
        ModalType.termsOfUse,
        ModalType.privacyPolicy,
        ModalType.communityGuidelines,
        ModalType.themes,
        ModalType.welcomeToOkunaWeb,
        ModalType.getTheApp,
        ModalType.communityRules,
        ModalType.communityStaff,
        ModalType.settings,
        ModalType.applicationSettings,
        ModalType.userSettings,
        ModalType.userProfileSettings,
        ModalType.userVisibilitySettings,
        ModalType.imageCropper,
        ModalType.userFollowings,
        ModalType.userFollowers,
        ModalType.postStudio,
    ];

    static values() {
        return ModalType._values.slice(0);
    }

    static parse(val: string): ModalType | undefined {
        let keyword;

        for (let i = 0; i < ModalType._values.length; i++) {
            const value = ModalType._values[i];
            if (val == value.code) {
                keyword = value;
                break;
            }
        }

        if (!keyword) {
            console.error('Unsupported modal type');
        }

        return keyword;
    }

    constructor(public code: string) {
    };


    toString(): string {
        return this.code;
    }
}
