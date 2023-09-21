import RNFetchBlob from 'rn-fetch-blob';
import { Alert } from 'react-native';
import FileViewer from 'react-native-file-viewer';

const getFileExtention = (fileUrl: string) => {
	// To get the file extension
	return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
};

export const downloadFile = (fileUri: string) => {
	let file_ext = getFileExtention(fileUri);
	const android = RNFetchBlob.android;
	const { fs, config } = RNFetchBlob;
	let rootDir = fs.dirs.DownloadDir;
	const path = rootDir + `/${fileUri.substring(10, 20)}.` + 'pdf';
	let options = {
		fileCache: true,
		addAndroidDownloads: {
			path,
			description: 'downloadfile',
			notification: true,
			useDownloadManager: true,
			mime: 'application/pdf',
		},
	};
	config(options)
		.fetch('GET', fileUri)
		.then(res => {
			console.log('The file saved to ', res);
			// Alert after successful downloading
			console.log('res -> ', JSON.stringify(res));
			Alert.alert('File Downloaded Successfully.');
			FileViewer.open(res.data);
		})
		.catch(error => {
			console.log(error);
		});
};
