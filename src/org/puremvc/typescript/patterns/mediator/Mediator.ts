/*
 PureMVC Javascript for TypeScript port by Frederic Saunier <frederic.saunier@puremvc.org>
 PureMVC - Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
module puremvc
{
	"use strict";

	/**
	 * A base <code>IMediator</code> implementation. 
	 * 
	 * @see org.puremvc.typescript.core.view.View View
	 */
	export class Mediator
		extends Notifier
		implements IMediator, INotifier
	{
		/**
		 * The name of the <code>Mediator</code>. 
		 * 
		 * <P>
		 * Typically, a <code>Mediator</code> will be written to serve one specific control or group controls and so,
		 * will not have a need to be dynamically named.
		 */
		public static NAME:string = 'Mediator';
		
		/**
		 * Constructor.
		 *
		 * @param {string} mediatorName
		 * 		The name of the <code>Mediator</code>.
		 *
		 * @param {Object} view
		 * 		The view component handled by this <code>Mediator</code>.
		 */
		constructor( mediatorName:string, viewComponent:Object )
		{
			super();

			this.mediatorName = (mediatorName != null) ? mediatorName : Mediator.NAME;
			this.viewComponent = viewComponent;	
		}

		/**
		 * Get the name of the <code>Mediator</code>.
		 * @return the Mediator name
		 */		
		public getMediatorName():string
		{	
			return this.mediatorName;
		}

		/**
		 * Set the <code>IMediator</code>'s view component.
		 * 
		 * @param Object the view component
		 */
		public setViewComponent( viewComponent:Object ):void
		{
			this.viewComponent = viewComponent;
		}

		/**
		 * Get the <code>Mediator</code>'s view component.
		 * 
		 * <P>
		 * Additionally, an implicit getter will usually
		 * be defined in the subclass that casts the view 
		 * object to a type, like this:</P>
		 * 
		 * <listing>
		 *		private get comboBox:mx.controls.ComboBox
		 *		{
		 *			return viewComponent as mx.controls.ComboBox;
		 *		}
		 * </listing>
		 * 
		 * @return the view component
		 */		
		public getViewComponent():Object
		{	
			return this.viewComponent;
		}

		/**
		 * List the <code>INotification</code> names this
		 * <code>Mediator</code> is interested in being notified of.
		 * 
		 * @return Array the list of <code>INotification</code> names 
		 */
		public listNotificationInterests():string[]
		{
			return new string[];
		}

		/**
		 * Handle <code>INotification</code>s.
		 * 
		 * <P>
		 * Typically this will be handled in a switch statement,
		 * with one 'case' entry per <code>INotification</code>
		 * the <code>Mediator</code> is interested in.
		 */ 
		public handleNotification( notification:INotification ):void {}
		
		/**
		 * Called by the View when the Mediator is registered
		 */ 
		public onRegister( ):void {}

		/**
		 * Called by the View when the Mediator is removed
		 */ 
		public onRemove( ):void {}

		// the mediator name
		public mediatorName:string;

		// The view component
		public viewComponent:Object;
	}
}