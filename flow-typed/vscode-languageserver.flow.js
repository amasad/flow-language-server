/**
 * Flowtype definitions for vscode-languageserver
 * Originally Generated by Flowgen from a Typescript Definition
 */
import type {
  TextDocumentSyncKind,
  TextDocumentChangeEvent,
  TextDocumentWillSaveEvent,
  RequestHandler,
  TextEdit,
  TextDocument,
  NotificationType,
  NotificationType0,
  RequestType,
  RequestType0,
  RPCMessageType,
  ApplyWorkspaceEditResponse,
  RequestHandler0,
  GenericRequestHandler,
  CancellationToken,
  NotificationHandler,
  NotificationHandler0,
  GenericNotificationHandler,
  InitializeParams,
  InitializeResult,
  InitializedParams,
  DidChangeConfigurationParams,
  DidOpenTextDocumentParams,
  DidChangeTextDocumentParams,
  DidCloseTextDocumentParams,
  WillSaveTextDocumentParams,
  DidSaveTextDocumentParams,
  PublishDiagnosticsParams,
  TextDocumentPositionParams,
  CompletionItem,
  CompletionList,
  SignatureHelp,
  Definition,
  DocumentHighlight,
  DocumentSymbolParams,
  SymbolInformation,
  WorkspaceSymbolParams,
  CodeActionParams,
  Command,
  CodeLensParams,
  CodeLens,
  DocumentFormattingParams,
  DocumentRangeFormattingParams,
  WorkspaceEdit,
  InitializeError,
  DidChangeWatchedFilesParams,
  Hover,
  ReferenceParams,
  DocumentOnTypeFormattingParams,
  RenameParams,
  DocumentLinkParams,
  DocumentLink,
  ExecuteCommandParams,
} from 'vscode-languageserver-types';

declare module 'vscode-languageserver' {
  declare var uriToFilePath: typeof undefined;

  declare var resolveGlobalNodePath: typeof undefined;

  declare var resolve: typeof undefined;

  declare var resolveModule: typeof undefined;

  declare var resolveModule2: typeof undefined;

  declare var resolveModulePath: typeof undefined;
  /**
   * A manager for simple text documents
   */
  declare class TextDocuments {
    /**
       * Create a new text document manager.
       */
    constructor(): this,

    /**
       * Returns the [TextDocumentSyncKind](#TextDocumentSyncKind) used by
       * this text document manager.
       */
    syncKind: TextDocumentSyncKind,

    /**
       * An event that fires when a text document managed by this manager
       * has been opened or the content changes.
       */
    onDidChangeContent: ((e: TextDocumentChangeEvent) => void) => void,

    /**
       * An event that fires when a text document managed by this manager
       * has been opened.
       */
    onDidOpen: Event<TextDocumentChangeEvent>,

    /**
       * An event that fires when a text document managed by this manager
       * will be saved.
       */
    onWillSave: Event<TextDocumentWillSaveEvent>,

    /**
       * Sets a handler that will be called if a participant wants to provide
       * edits during a text document save.
       */
    onWillSaveWaitUntil(
      handler: RequestHandler<TextDocumentWillSaveEvent, TextEdit[], void>,
    ): void,

    /**
       * An event that fires when a text document managed by this manager
       * has been saved.
       */
    onDidSave: Event<TextDocumentChangeEvent>,

    /**
       * An event that fires when a text document managed by this manager
       * has been closed.
       */
    onDidClose: Event<TextDocumentChangeEvent>,

    /**
       * Returns the document for the given URI. Returns undefined if
       * the document is not mananged by this instance.
       * @param uri The text document's URI to retrieve.
       * @return  the text document or `undefined`.
       */
    get(uri: string): TextDocument,

    /**
       * Returns all text documents managed by this instance.
       * @return  all text documents.
       */
    all(): TextDocument[],

    /**
       * Returns the URIs of all text documents managed by this instance.
       * @return  the URI's of all text documents.
       */
    keys(): string[],

    /**
       * Listens for `low level` notification on the given connection to
       * update the text documents managed by this instance.
       * @param connection The connection to listen on.
       */
    listen(connection: IConnection): void,
  }
  /**
   * Helps tracking error message. Equal occurences of the same
   * message are only stored once. This class is for example
  usefull if text documents are validated in a loop and equal
  error message should be folded into one.
  */
  declare class ErrorMessageTracker {
    constructor(): this,

    /**
       * Add a message to the tracker.
       * @param message The message to add.
       */
    add(message: string): void,

    /**
       * Send all tracked messages to the conenction's window.
       * @param connection The connection establised between client and server.
       */
    sendErrors(connection: {
      window: RemoteWindow,
    }): void,
  }
  /**
   * The RemoteConsole interface contains all functions to interact with
   * the developer console of VS Code.
   */
  declare interface RemoteConsole {
    /**
       * Show an error message.
       * @param message The message to show.
       */
    error(message: string): void,

    /**
           * Show a warning message.
           * @param message The message to show.
           */
    warn(message: string): void,

    /**
           * Show an information message.
           * @param message The message to show.
           */
    info(message: string): void,

    /**
           * Log a message.
           * @param message The message to log.
           */
    log(message: string): void,
  }
  /**
   * The RemoteWindow interface contains all functions to interact with
   * the visual window of VS Code.
   */
  declare interface RemoteWindow {
    /**
       * Show an error message.
       * @param message The message to show.
       */
    showErrorMessage(message: string): void,
    showErrorMessage<T>(message: string, ...actions: T[]): Thenable<T>,

    /**
           * Show a warning message.
           * @param message The message to show.
           */
    showWarningMessage(message: string): void,
    showWarningMessage<T>(message: string, ...actions: T[]): Thenable<T>,

    /**
           * Show an information message.
           * @param message The message to show.
           */
    showInformationMessage(message: string): void,
    showInformationMessage<T>(message: string, ...actions: T[]): Thenable<T>,
  }
  /**
   * A bulk registration manages n single registration to be able to register
   * for n notifications or requests using one register request.
   */
  declare interface BulkRegistration {
    /**
       * Adds a single registration.
       * @param type the notification type to register for.
       * @param registerParams special registration parameters.
       */
    add<RO>(type: NotificationType0<RO>, registerParams: RO): void,
    add<P, RO>(type: NotificationType<P, RO>, registerParams: RO): void,

    /**
           * Adds a single registration.
           * @param type the request type to register for.
           * @param registerParams special registration parameters.
           */
    add<R, E, RO>(type: RequestType0<R, E, RO>, registerParams: RO): void,
    add<P, R, E, RO>(type: RequestType<P, R, E, RO>, registerParams: RO): void,
  }

  /**
   * Creates a new bulk registration.
   * @return  an empty bulk registration.
   */
  declare function BulkRegistration$create(): BulkRegistration;
  /**
   * A `BulkUnregistration` manages n unregistrations.
   */
  declare type BulkUnregistration = {
    /**
       * Disposes a single registration. It will be removed from the
       * `BulkUnregistration`.
       */
    disposeSingle(arg: string | RPCMessageType): boolean,
  } & Disposable;

  declare var npm$namespace$BulkRegistration: {
    create: typeof BulkRegistration$create,
  };

  /**
   * Creates a new bulk registration.
   * @return  an empty bulk registration.
   */
  declare function BulkUnregistration$create(): BulkRegistration;

  declare var npm$namespace$BulkUnregistration: {
    create: typeof BulkUnregistration$create,
  };

  /**
   * Interface to register and unregister `listeners` on the client / tools side.
   */
  declare interface RemoteClient {
    /**
       * Registers a listener for the given notification.
       * @param type the notification type to register for.
       * @param registerParams special registration parameters.
       * @return  a `Disposable` to unregister the listener again.
       */
    register<RO>(
      type: NotificationType0<RO>,
      registerParams?: RO,
    ): Thenable<Disposable>,
    register<P, RO>(
      type: NotificationType<P, RO>,
      registerParams?: RO,
    ): Thenable<Disposable>,

    /**
           * Registers a listener for the given notification.
           * @param unregisteration the unregistration to add a corresponding unregister action to.
           * @param type the notification type to register for.
           * @param registerParams special registration parameters.
           * @return  the updated unregistration.
           */
    register<RO>(
      unregisteration: BulkUnregistration,
      type: NotificationType0<RO>,
      registerParams?: RO,
    ): Thenable<BulkUnregistration>,
    register<P, RO>(
      unregisteration: BulkUnregistration,
      type: NotificationType<P, RO>,
      registerParams?: RO,
    ): Thenable<BulkUnregistration>,

    /**
           * Registers a listener for the given request.
           * @param type the request type to register for.
           * @param registerParams special registration parameters.
           * @return  a `Disposable` to unregister the listener again.
           */
    register<R, E, RO>(
      type: RequestType0<R, E, RO>,
      registerParams?: RO,
    ): Thenable<Disposable>,
    register<P, R, E, RO>(
      type: RequestType<P, R, E, RO>,
      registerParams?: RO,
    ): Thenable<Disposable>,

    /**
           * Registers a listener for the given request.
           * @param unregisteration the unregistration to add a corresponding unregister action to.
           * @param type the request type to register for.
           * @param registerParams special registration parameters.
           * @return  the updated unregistration.
           */
    register<R, E, RO>(
      unregisteration: BulkUnregistration,
      type: RequestType0<R, E, RO>,
      registerParams?: RO,
    ): Thenable<BulkUnregistration>,
    register<P, R, E, RO>(
      unregisteration: BulkUnregistration,
      type: RequestType<P, R, E, RO>,
      registerParams?: RO,
    ): Thenable<BulkUnregistration>,

    /**
           * Registers a set of listeners.
           * @param registrations the bulk registration
           * @return  a `Disposable` to unregister the listeners again.
           */
    register(registrations: BulkRegistration): Thenable<BulkUnregistration>,
  }
  /**
   * Represents the workspace managed by the client.
   */
  declare interface RemoteWorkspace {
    /**
       * Applies a `WorkspaceEdit` to the workspace
       * @param edit the workspace edit.
       * @return  a thenable that resolves to the `ApplyWorkspaceEditResponse`.
       */
    applyEdit(edit: WorkspaceEdit): Thenable<ApplyWorkspaceEditResponse>,
  }
  /**
   * Interface to log telemetry events. The events are actually send to the client
   * and the client needs to feed the event into a propert telemetry system.
   */
  declare interface Telemetry {
    /**
       * Log the given data to telemetry.
       * @param data The data to log. Must be a JSON serializable object.
       */
    logEvent(data: any): void,
  }
  /**
   * Interface to log traces to the client. The events are sent to the client and the
   * client needs to log the trace events.
   */
  declare interface Tracer {
    /**
       * Log the given data to the trace Log
       */
    log(message: string, verbose?: string): void,
  }
  /**
   * Interface to describe the shape of the server connection.
   */
  declare interface IConnection {
    /**
       * Start listening on the input stream for messages to process.
       */
    listen(): void,

    /**
           * Installs a request handler described by the given [RequestType](#RequestType).
           * @param type The [RequestType](#RequestType) describing the request.
           * @param handler The handler to install
           */
    onRequest<R, E, RO>(
      type: RequestType0<R, E, RO>,
      handler: RequestHandler0<R, E>,
    ): void,
    onRequest<P, R, E, RO>(
      type: RequestType<P, R, E, RO>,
      handler: RequestHandler<P, R, E>,
    ): void,

    /**
           * Installs a request handler for the given method.
           * @param method The method to register a request handler for.
           * @param handler The handler to install.
           */
    onRequest<R, E>(method: string, handler: GenericRequestHandler<R, E>): void,

    /**
           * Send a request to the client.
           * @param type The [RequestType](#RequestType) describing the request.
           * @param params The request's parameters.
           */
    sendRequest<R, E, RO>(
      type: RequestType0<R, E, RO>,
      token?: CancellationToken,
    ): Thenable<R>,
    sendRequest<P, R, E, RO>(
      type: RequestType<P, R, E, RO>,
      params: P,
      token?: CancellationToken,
    ): Thenable<R>,

    /**
           * Send a request to the client.
           * @param method The method to invoke on the client.
           * @param params The request's parameters.
           */
    sendRequest<R>(method: string, ...params: any[]): Thenable<R>,

    /**
           * Installs a notification handler described by the given [NotificationType](#NotificationType).
           * @param type The [NotificationType](#NotificationType) describing the notification.
           * @param handler The handler to install.
           */
    onNotification<RO>(
      type: NotificationType0<RO>,
      handler: NotificationHandler0,
    ): void,
    onNotification<P, RO>(
      type: NotificationType<P, RO>,
      handler: NotificationHandler<P>,
    ): void,

    /**
           * Installs a notification handler for the given method.
           * @param method The method to register a request handler for.
           * @param handler The handler to install.
           */
    onNotification(method: string, handler: GenericNotificationHandler): void,

    /**
           * Send a notification to the client.
           * @param type The [NotificationType](#NotificationType) describing the notification.
           * @param params The notification's parameters.
           */
    sendNotification<RO>(type: NotificationType0<RO>): void,
    sendNotification<P, RO>(type: NotificationType<P, RO>, params?: P): void,

    /**
           * Send a notification to the client.
           * @param method The method to invoke on the client.
           * @param params The notification's parameters.
           */
    sendNotification(method: string, ...args: any[]): void,

    /**
           * Installs a handler for the intialize request.
           * @param handler The initialize handler.
           */
    onInitialize(
      handler: RequestHandler<
        InitializeParams,
        InitializeResult,
        InitializeError
      >,
    ): void,

    /**
           * Installs a handler for the intialized notification.
           * @param handler The initialized handler.
           */
    onInitialized(handler: NotificationHandler<InitializedParams>): void,

    /**
           * Installs a handler for the shutdown request.
           * @param handler The initialize handler.
           */
    onShutdown(handler: RequestHandler0<void, void>): void,

    /**
           * Installs a handler for the exit notification.
           * @param handler The exit handler.
           */
    onExit(handler: NotificationHandler0): void,

    /**
           * A proxy interface for the language client interface to register for requests or
           * notifications.
           */
    client: RemoteClient,

    /**
           * A proxy for VSCode's development console. See [RemoteConsole](#RemoteConsole)
           */
    console: RemoteConsole,

    /**
           * A proxy for VSCode's window. See [RemoteWindow](#RemoteWindow)
           */
    window: RemoteWindow,

    /**
           * A proxy to send telemetry events to the client.
           */
    telemetry: Telemetry,

    /**
           * A proxy to send trace events to the client.
           */
    tracer: Tracer,

    /**
           * A proxy to talk to the client's workspace.
           */
    workspace: RemoteWorkspace,

    /**
           * Installs a handler for the `DidChangeConfiguration` notification.
           * @param handler The corresponding handler.
           */
    onDidChangeConfiguration(
      handler: NotificationHandler<DidChangeConfigurationParams>,
    ): void,

    /**
           * Installs a handler for the `DidChangeWatchedFiles` notification.
           * @param handler The corresponding handler.
           */
    onDidChangeWatchedFiles(
      handler: NotificationHandler<DidChangeWatchedFilesParams>,
    ): void,

    /**
           * Installs a handler for the `DidOpenTextDocument` notification.
           * @param handler The corresponding handler.
           */
    onDidOpenTextDocument(
      handler: NotificationHandler<DidOpenTextDocumentParams>,
    ): void,

    /**
           * Installs a handler for the `DidChangeTextDocument` notification.
           * @param handler The corresponding handler.
           */
    onDidChangeTextDocument(
      handler: NotificationHandler<DidChangeTextDocumentParams>,
    ): void,

    /**
           * Installs a handler for the `DidCloseTextDocument` notification.
           * @param handler The corresponding handler.
           */
    onDidCloseTextDocument(
      handler: NotificationHandler<DidCloseTextDocumentParams>,
    ): void,

    /**
           * Installs a handler for the `DidSaveTextDocument` notification.
           * @param handler The corresponding handler.
           */
    onWillSaveTextDocument(
      handler: NotificationHandler<WillSaveTextDocumentParams>,
    ): void,

    /**
           * Installs a handler for the `DidSaveTextDocument` notification.
           * @param handler The corresponding handler.
           */
    onWillSaveTextDocumentWaitUntil(
      handler: RequestHandler<WillSaveTextDocumentParams, TextEdit[], void>,
    ): void,

    /**
           * Installs a handler for the `DidSaveTextDocument` notification.
           * @param handler The corresponding handler.
           */
    onDidSaveTextDocument(
      handler: NotificationHandler<DidSaveTextDocumentParams>,
    ): void,

    /**
           * Sends diagnostics computed for a given document to VSCode to render them in the
           * user interface.
           * @param params The diagnostic parameters.
           */
    sendDiagnostics(params: PublishDiagnosticsParams): void,

    /**
           * Installs a handler for the `Hover` request.
           * @param handler The corresponding handler.
           */
    onHover(
      handler: RequestHandler<TextDocumentPositionParams, Hover, void>,
    ): void,

    /**
           * Installs a handler for the `Completion` request.
           * @param handler The corresponding handler.
           */
    onCompletion(
      handler: RequestHandler<
        TextDocumentPositionParams,
        CompletionItem[] | CompletionList,
        void
      >,
    ): void,

    /**
           * Installs a handler for the `CompletionResolve` request.
           * @param handler The corresponding handler.
           */
    onCompletionResolve(
      handler: RequestHandler<CompletionItem, CompletionItem, void>,
    ): void,

    /**
           * Installs a handler for the `SignatureHelp` request.
           * @param handler The corresponding handler.
           */
    onSignatureHelp(
      handler: RequestHandler<TextDocumentPositionParams, SignatureHelp, void>,
    ): void,

    /**
           * Installs a handler for the `Definition` request.
           * @param handler The corresponding handler.
           */
    onDefinition(
      handler: RequestHandler<TextDocumentPositionParams, Definition, void>,
    ): void,

    /**
           * Installs a handler for the `References` request.
           * @param handler The corresponding handler.
           */
    onReferences(
      handler: RequestHandler<ReferenceParams, Location[], void>,
    ): void,

    /**
           * Installs a handler for the `DocumentHighlight` request.
           * @param handler The corresponding handler.
           */
    onDocumentHighlight(
      handler: RequestHandler<
        TextDocumentPositionParams,
        DocumentHighlight[],
        void
      >,
    ): void,

    /**
           * Installs a handler for the `DocumentSymbol` request.
           * @param handler The corresponding handler.
           */
    onDocumentSymbol(
      handler: RequestHandler<DocumentSymbolParams, SymbolInformation[], void>,
    ): void,

    /**
           * Installs a handler for the `WorkspaceSymbol` request.
           * @param handler The corresponding handler.
           */
    onWorkspaceSymbol(
      handler: RequestHandler<WorkspaceSymbolParams, SymbolInformation[], void>,
    ): void,

    /**
           * Installs a handler for the `CodeAction` request.
           * @param handler The corresponding handler.
           */
    onCodeAction(
      handler: RequestHandler<CodeActionParams, Command[], void>,
    ): void,

    /**
           * Compute a list of [lenses](#CodeLens). This call should return as fast as possible and if
           * computing the commands is expensive implementors should only return code lens objects with the
          range set and handle the resolve request.
           * @param handler The corresponding handler.
          */
    onCodeLens(handler: RequestHandler<CodeLensParams, CodeLens[], void>): void,

    /**
           * This function will be called for each visible code lens, usually when scrolling and after
           * the onCodeLens has been called.
           * @param handler The corresponding handler.
           */
    onCodeLensResolve(handler: RequestHandler<CodeLens, CodeLens, void>): void,

    /**
           * Installs a handler for the document formatting request.
           * @param handler The corresponding handler.
           */
    onDocumentFormatting(
      handler: RequestHandler<DocumentFormattingParams, TextEdit[], void>,
    ): void,

    /**
           * Installs a handler for the document range formatting request.
           * @param handler The corresponding handler.
           */
    onDocumentRangeFormatting(
      handler: RequestHandler<DocumentRangeFormattingParams, TextEdit[], void>,
    ): void,

    /**
           * Installs a handler for the document on type formatting request.
           * @param handler The corresponding handler.
           */
    onDocumentOnTypeFormatting(
      handler: RequestHandler<DocumentOnTypeFormattingParams, TextEdit[], void>,
    ): void,

    /**
           * Installs a handler for the rename request.
           * @param handler The corresponding handler.
           */
    onRenameRequest(
      handler: RequestHandler<RenameParams, WorkspaceEdit, void>,
    ): void,

    /**
           * Installs a handler for the document links request.
           * @param handler The corresponding handler.
           */
    onDocumentLinks(
      handler: RequestHandler<DocumentLinkParams, DocumentLink[], void>,
    ): void,

    /**
           * Installs a handler for the document links resolve request.
           * @param handler The corresponding handler.
           */
    onDocumentLinkResolve(
      handler: RequestHandler<DocumentLink, DocumentLink, void>,
    ): void,

    /**
           * Installs a handler for the execute command request.
           * @param handler The corresponding handler.
           */
    onExecuteCommand(
      handler: RequestHandler<ExecuteCommandParams, any, void>,
    ): void,

    /**
           * Disposes the connection
           */
    dispose(): void,
  }
  /**
   * Creates a new connection using a the given streams.
   * @param inputStream The stream to read messages from.
   * @param outputStream The stream to write messages to.
   * @return  a [connection](#IConnection)
   */
  declare function createConnection(
    inputStream: ReadableStream,
    outputStream: WritableStream,
  ): IConnection;

  declare class IPCMessageReader {}

  declare class IPCMessageWriter {}
}
