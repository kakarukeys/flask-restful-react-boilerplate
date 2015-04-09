FROM ubuntu:14.04

MAINTAINER kakarukeys, https://github.com/kakarukeys

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get install -y \
    python-software-properties \
    build-essential \
    python3 \
    python3-dev \
    python3-setuptools \
    python3-pip \
    supervisor \
    nginx \
    git
RUN pip3 install uwsgi

# Configure Nginx
RUN rm /etc/nginx/sites-enabled/default
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Configure Supervisor
RUN mkdir -p /var/log/supervisor

# install our code
ADD . /home/docker/code/
RUN pip3 install -r /home/docker/code/requirements.txt
RUN ln -s /home/docker/code/nginx-app.conf /etc/nginx/sites-enabled/nginx-app.conf
RUN ln -s /home/docker/code/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# setup unix socket
RUN touch /home/docker/code/app.sock
RUN chmod 666 /home/docker/code/app.sock

EXPOSE 80 443

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
