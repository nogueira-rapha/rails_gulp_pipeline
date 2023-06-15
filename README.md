# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


rails new -J --skip-asset-pipeline --skip-action-cable --skip-action-mailbox --skip-action-text --skip-active-storage --skip-active-job --skip-hotwire --skip-jbuilder --database=postgresql -B --minimal .

adicionar usuário e senha do database no database.yml

rails db:create

rails s -b 0.0.0.0 -p 3000