import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Editor, Draft, EditorState,convertToRaw, convertFromRaw, ContentBlock, RichUtils, CompositeDecorator, KeyBindingUtil, getDefaultKeyBinding} from 'draft-js';
import {Layout, Section} from 'classui/Components/Layout';
import {blockStyleFn, blockRenderedFn} from './_utils';
import * as Immutable from 'immutable';

export let DraftEditorRender = (props: {contentState?: string})=>{
	let editorState = props.contentState?
		EditorState.createWithContent(convertFromRaw(JSON.parse(props.contentState))):
		EditorState.createEmpty();
	return <div className="draftEditor" style={{padding: 5}}>
		<Editor 
		editorState={editorState}
		readOnly
		onChange={()=>{}}
		blockStyleFn={blockStyleFn}
		blockRendererFn={blockRenderedFn}
	/>
	</div>;
};