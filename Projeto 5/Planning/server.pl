:- consult('knowledgeBase').
:- consult('road').
:- consult('connection').
:- consult('heuristics').
:- consult('splittingDeliveries').

:- module(server,
      [ server/1            % ?Port
      ]).

:- use_module(library(http/http_json)).
:- use_module(library(http/http_open)).
:- use_module(library(http/json)).
:- use_module(library(http/json_convert)).
:- use_module(library(http/http_client)).
:- use_module(library(http/http_parameters)).
:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/http_files)).
:- use_module(library(http/http_unix_daemon)).
:- use_module(library(http/http_log)).
:- use_module(library(http/http_dyn_workers)).
:- http_handler(root(.), http_reply_from_files('.', []), [prefix]).

server(Port) :-
    http_server(http_dispatch,
                [ port(Port),
                  workers(16)
                ]).


server(Port) :-
        http_server(http_dispatch, [ port(Port), workers(16) ]).

:-startServer(5030).
