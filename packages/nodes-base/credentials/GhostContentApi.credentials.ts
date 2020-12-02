import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';

export class GhostContentApi implements ICredentialType {
	name = 'ghostContentApi';
	displayName = 'Ghost Content API';
	documentationUrl = 'ghost';
	properties = [
		{
			displayName: 'URL',
			name: 'url',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
	];
}
