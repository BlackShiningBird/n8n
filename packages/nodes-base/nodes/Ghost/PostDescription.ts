import {
	INodeProperties,
} from 'n8n-workflow';

export const postOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				source: [
					'contentApi',
				],
				resource: [
					'post',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get a post',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all posts',
			},
		],
		default: 'get',
		description: 'The operation to perform.',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				source: [
					'adminApi',
				],
				resource: [
					'post',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a post',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a post',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a post',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all posts',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a post',
			},
		],
		default: 'get',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const postFields = [
	/* -------------------------------------------------------------------------- */
	/*                                post:create                                 */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				source: [
					'adminApi',
				],
				resource: [
					'post',
				],
				operation: [
					'create',
				],
			},
		},
		description: `Post's title`,
	},
	{
		displayName: 'Content Format',
		name: 'contentFormat',
		type: 'options',
		displayOptions: {
			show: {
				source: [
					'adminApi',
				],
				resource: [
					'post',
				],
				operation: [
					'create',
				],
			},
		},
		options: [
			{
				name: 'Mobile Doc',
				value: 'mobileDoc',
			},
			{
				name: 'HTML',
				value: 'html',
			},
		],
		default: 'html',
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				source: [
					'adminApi',
				],
				resource: [
					'post',
				],
				operation: [
					'create',
				],
				contentFormat: [
					'html',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Content (JSON)',
		name: 'content',
		type: 'json',
		displayOptions: {
			show: {
				source: [
					'adminApi',
				],
				resource: [
					'post',
				],
				operation: [
					'create',
				],
				contentFormat: [
					'mobileDoc',
				],
			},
		},
		
		default: '',
		description: 'Mobiledoc is the raw JSON format that Ghost uses to store post contents. <a href="https://ghost.org/docs/concepts/posts/#document-storage" target="_blank">Info.</a>',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				source: [
					'adminApi',
				],
				resource: [
					'post',
				],
				operation: [
					'create',
				],
			},
		},
		options: [
			{
				displayName: 'Authors IDs',
				name: 'authors',
				type: 'multiOptions',
				typeOptions: {
					loadOptionsMethod: 'getAuthors',
				},
				default: [],
			},
			{
				displayName: 'Cannonical URL',
				name: 'canonical_url',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Code Injection Foot',
				name: 'codeinjection_foot',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Code Injection Head',
				name: 'codeinjection_head',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Featured',
				name: 'featured',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Meta Description',
				name: 'meta_description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Meta Title',
				name: 'meta_title',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Open Graph Description',
				name: 'og_description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Open Graph Title',
				name: 'og_title',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Open Graph Image',
				name: 'og_image',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Published At',
				name: 'publishedAt',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Draft',
						value: 'draft',
					},
					{
						name: 'Published',
						value: 'published',
					},
					{
						name: 'Scheduled',
						value: 'scheduled',
					},
				],
				default: 'draft',
			},
			{
				displayName: 'Tags IDs',
				name: 'tags',
				type: 'multiOptions',
				typeOptions: {
					loadOptionsMethod: 'getTags',
				},
				default: [],
			},
			{
				displayName: 'Slug',
				name: 'slug',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Twitter Description',
				name: 'twitter_description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Twitter Image',
				name: 'twitter_image',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Twitter Title',
				name: 'twitter_title',
				type: 'string',
				default: '',
			},
		],	
	},
	/* -------------------------------------------------------------------------- */
	/*                                post:delete                                 */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Post ID',
		name: 'postId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				source: [
					'adminApi',
				],
				resource: [
					'post',
				],
				operation: [
					'delete',
				],
			},
		},
		description: 'The ID of the post to delete',
	},
	/* -------------------------------------------------------------------------- */
	/*                                post:get                                    */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'By',
		name: 'by',
		type: 'options',
		default: '',
		required: true,
		options: [
			{
				name: 'ID',
				value: 'id',
			},
			{
				name: 'Slug',
				value: 'slug',
			},
		],
		displayOptions: {
			show: {
				source: [
					'contentApi',
					'adminApi',
				],
				resource: [
					'post',
				],
				operation: [
					'get',
				],
			},
		},
		description: 'Get the post either by slug or id',
	},
	{
		displayName: 'Identifier',
		name: 'identifier',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				source: [
					'contentApi',
					'adminApi',
				],
				resource: [
					'post',
				],
				operation: [
					'get',
				],
			},
		},
		description: 'The ID or slug of the post to get.',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				source: [
					'adminApi',
				],
				resource: [
					'post',
				],
				operation: [
					'get',
				],
			},
		},
		options: [
			{
				displayName: 'Fields',
				name: 'fields',
				type: 'string',
				default: '',
				description: 'Limit the fields returned in the response object. E.g. for posts &fields=title,url.',
			},
			{
				displayName: 'Formats',
				name: 'formats',
				type: 'multiOptions',
				options: [
					{
						name: 'HTML',
						value: 'html',
					},
					{
						name: 'Mobile Doc',
						value: 'mobiledoc',
					},
				],
				default: [
					'mobiledoc',
				],
			},
		],
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				source: [
					'contentApi',
				],
				resource: [
					'post',
				],
				operation: [
					'get',
				],
			},
		},
		options: [
			{
				displayName: 'Fields',
				name: 'fields',
				type: 'string',
				default: '',
				description: 'Limit the fields returned in the response object. E.g. for posts &fields=title,url.',
			},
			{
				displayName: 'Formats',
				name: 'formats',
				type: 'multiOptions',
				options: [
					{
						name: 'HTML',
						value: 'html',
					},
					{
						name: 'Plaintext',
						value: 'plaintext',
					},
				],
				default: [
					'html',
				],
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                post:getAll                                 */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				source: [
					'contentApi',
					'adminApi',
				],
				resource: [
					'post',
				],
				operation: [
					'getAll',
				],
			},
		},
		default: false,
		description: 'Returns a list of your user contacts.',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				source: [
					'adminApi',
					'contentApi',
				],
				resource: [
					'post',
				],
				operation: [
					'getAll',
				],
				returnAll: [
					false,
				],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'How many results to return.',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				source: [
					'contentApi',
				],
				resource: [
					'post',
				],
				operation: [
					'getAll',
				],
			},
		},
		options: [
			{
				displayName: 'Include',
				name: 'include',
				type: 'multiOptions',
				options: [
					{
						name: 'Authors',
						value: 'authors',
					},
					{
						name: 'Tags',
						value: 'tags',
					},
				],
				default: [],
				description: 'Tells the API to return additional data related to the resource you have requested',
			},
			{
				displayName: 'Fields',
				name: 'fields',
				type: 'string',
				default: '',
				description: 'Limit the fields returned in the response object. E.g. for posts &fields=title,url.',
			},
			{
				displayName: 'Formats',
				name: 'formats',
				type: 'multiOptions',
				options: [
					{
						name: 'HTML',
						value: 'html',
					},
					{
						name: 'Plaintext',
						value: 'plaintext',
					},
				],
				default: [
					'html',
				],
				description: `By default, only html is returned, however each post and page in Ghost has 2 available formats: html and plaintext.`,
			},
		],
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				source: [
					'adminApi',
				],
				resource: [
					'post',
				],
				operation: [
					'getAll',
				],
			},
		},
		options: [
			{
				displayName: 'Include',
				name: 'include',
				type: 'multiOptions',
				options: [
					{
						name: 'Authors',
						value: 'authors',
					},
					{
						name: 'Tags',
						value: 'tags',
					},
				],
				default: [],
				description: 'Tells the API to return additional data related to the resource you have requested',
			},
			{
				displayName: 'Fields',
				name: 'fields',
				type: 'string',
				default: '',
				description: 'Limit the fields returned in the response object. E.g. for posts &fields=title,url.',
			},
			{
				displayName: 'Formats',
				name: 'formats',
				type: 'multiOptions',
				options: [
					{
						name: 'HTML',
						value: 'html',
					},
					{
						name: 'Mobile Doc',
						value: 'mobiledoc',
					},
				],
				default: [
					'mobiledoc',
				],
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                post:update                                 */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Post ID',
		name: 'postId',
		type: 'string',
		displayOptions: {
			show: {
				source: [
					'adminApi',
				],
				resource: [
					'post',
				],
				operation: [
					'update',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				source: [
					'adminApi',
				],
				resource: [
					'post',
				],
				operation: [
					'update',
				],
			},
		},
		options: [
			{
				displayName: 'Authors IDs',
				name: 'authors',
				type: 'multiOptions',
				typeOptions: {
					loadOptionsMethod: 'getAuthors',
				},
				default: [],
			},
			{
				displayName: 'Cannonical URL',
				name: 'canonical_url',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Code Injection Foot',
				name: 'codeinjection_foot',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Code Injection Head',
				name: 'codeinjection_head',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Featured',
				name: 'featured',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Meta Description',
				name: 'meta_description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Meta Title',
				name: 'meta_title',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Open Graph Description',
				name: 'og_description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Open Graph Title',
				name: 'og_title',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Open Graph Image',
				name: 'og_image',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Published At',
				name: 'publishedAt',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Draft',
						value: 'draft',
					},
					{
						name: 'Published',
						value: 'published',
					},
					{
						name: 'Scheduled',
						value: 'scheduled',
					},
				],
				default: 'draft',
			},
			{
				displayName: 'Tags IDs',
				name: 'tags',
				type: 'multiOptions',
				typeOptions: {
					loadOptionsMethod: 'getTags',
				},
				default: [],
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: `Post's title`,
			},
			{
				displayName: 'Slug',
				name: 'slug',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Twitter Description',
				name: 'twitter_description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Twitter Image',
				name: 'twitter_image',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Twitter Title',
				name: 'twitter_title',
				type: 'string',
				default: '',
			},
		],	
	},
	
] as INodeProperties[];
