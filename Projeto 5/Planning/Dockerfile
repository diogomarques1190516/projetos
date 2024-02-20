#FROM swipl
#COPY . .

#ENTRYPOINT docker run -it swish
#swipl -g 'consult("knowledgeBase.pl"). ' -g 'limits(40,L,F),write(L)'
#CMD ["swipl", "knowledgeBase.pl"]
# -g 'consult("connection.pl")' 
#-g 'fetchData()' -g 'startServer(5030).'
#-g 'knowledgeBase.'


#RUN consult connection.pl
#FROM swipl
#COPY . /app
#CMD ["swipl", "/app/knowledgeBase.pl"]


FROM swipl

COPY . /app
EXPOSE 80

ENTRYPOINT ["swipl"]
CMD ["/app/server.pl",  "--user=daemon", "--fork=false", "--port=80"]