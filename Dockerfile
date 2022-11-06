FROM python:3.9-buster


WORKDIR /opt/app


COPY /core ./core

COPY /project ./project

COPY requirements.txt .

COPY startup.sh .

COPY manage.py .

RUN pip3 install -r requirements.txt --cache-dir /opt/app/pip_cache

EXPOSE 8000

    

CMD ["bash", "startup.sh"]