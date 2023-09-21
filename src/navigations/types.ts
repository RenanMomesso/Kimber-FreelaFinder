import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { JobDetail } from '../components/JobCard';

export type RootNavigationProps = {
	Onboarding: undefined,
	Login: undefined,
	Signup: undefined,
	LoginEmail: undefined,
	SignupEmail: undefined,
	ForgotPassword: undefined,
	VerifyCodeScreen: {
		email: string,
		registerAccount: boolean,
	},
	ResetPasswordScreen: undefined,
	ProfileScreen: BottomNavigationProps,
	SettingsScreen: undefined,
	EditProfileScreen: undefined,
	JobsHistoricNavigation: undefined,
	JobsCreatedNavigation: undefined,
	ChatNavigation: undefined,
	SkillsScreen: undefined,
	PortifoliosScreen: undefined,
	NewPortifolioScreen: undefined,
	FullImageScreen: {
		image: string,
		onPress: any,
	},
	JobsHistoricDetails: {
		route: any,
	},
	PortifolioScreen: {
		id: string,
	},
	AnalyticScreen: undefined
};

export type BottomNavigationProps = {
	home: JobCardNavigationProps,
	search: undefined,
	createPost: undefined,
	notifications: undefined,
	profile: undefined,
};

export type JobCardNavigationProps = {
	Job: undefined,
	JobApplication: {
		item?: JobDetail,
	},
	jobDetail: {
		item: JobDetail,
	},
	PortifoliosScreen: any,
	PortifolioScreen: any,
	FullImageScreen: {
		image: string,
		imageSpecs: any,
	},
	JobsHistoricDetails: {
		id: any
	},
	ChatNavigation: any
	,JobsCreatedNavigation: any
	,AnalyticsScreen: any
	EditProfileScreen: any
};

export type JobHistoricNavigationProps = {
	JobHistoric: undefined,
	JobsHistoricDetails: undefined,
};

export type LoginScreenNavigationProps = NativeStackNavigationProp<RootNavigationProps>;
