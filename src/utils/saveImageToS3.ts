import { Storage } from 'aws-amplify';

export const saveImageToS3 = async (item: any, userID: string) => {
	const itemType = item.type.split('/')[1];
	try {
		const fetchImage = await fetch(item.uri);
		const blob = await fetchImage.blob();
		const key = `${user?.id}/${
			portifolioData?.getPortifolio?.id
		}/extraImages-${new Date().getTime()}-${itemType}`;
		const { key: keyId } = await Storage.put(key, blob, {
			contentType: itemType,
			progressCallback(progress) {
				console.log('progress', progress);
			},
		});
		console.log('keyId', keyId);
		return key;
	} catch (error) {
		return error;
	}
};
