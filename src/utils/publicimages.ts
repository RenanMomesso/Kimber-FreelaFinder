import config from '../../src/aws-exports';
export const getPublicImg = (img: string) => {
	return `https://${config.aws_user_files_s3_bucket}.s3.amazonaws.com/public/${img}`;
};
