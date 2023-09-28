# Express JS Backend for Bank Transaction And Loan Processing System

By Group 5

## Prerequisites

### Node JS

Install from https://nodejs.org/en

### Yarn

This project Uses yarn as the package manager. Do not use npm/pnpm as it will conflict with the modules installed.

To install yarn, run the following command

```
npm -g install yarn
```

Now run

```
yarn --version
```

to confirm that yarn is installed.

### MySQL local environment

Please refer to official guides to install MySQL locally.

## Build Instructions

### 1. Clone the git repo

### 2. Navigate to project folder

### 3. Install the necessary packages by running the following in a terminal shell.

```
yarn install
```

## Configs

### DB Config

Change the values in ` ./configs/db.config.js` to suit your local enviroment.

## Scripts

To run the server, use following yarn script

```
yarn start
```

To add an admin user with admin previledges, run the following script.

```
yarn create-admin
```

To delete all admin users, run the following script.

```
yarn delete-all-admin
```
