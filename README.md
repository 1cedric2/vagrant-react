# Building a ReactJS application in Vagrant

In case you want to built ReactJS application in your very own Vagrant box use this simple git repository for the initial setup:

        git clone https://github.com/shatodj/vagrant-react.git

# Vagrant installation

To get up and running with this environment, you first need to have Virtualbox and Vagrant installed on your system.
If you don't already have those, visit the downloads pages below and follow the instructions for your operating system:
    
* [Virtualbox Downloads](https://www.virtualbox.org/wiki/Downloads)
* [Vagrant Downloads](https://www.vagrantup.com/downloads.html)

# Project Structure

| FIle / Folder       | Description                                                                                                                                                                        |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| app                 | React development files.                                                                                                                                                           |
| public              | Final & complied files output directory. This can be changed to fit your projects needs. Just note that the changes would also need to be reflected in the webpack.config.js file. |
| Vagrantfile         | Machine and software requirements used by Vagrant.                                                                                                                                 |
| package.json        | npm depecncies and description.                                                                                                                                                    |
| webpack.confog.json | Config file for webpack dev server.                                                                                                                                                |

# Starting the Vagrant box

It's very simple. In terminal / console navigate to the git repository that you cloned on the very first step. Then start your vagrant box typing:

        vagrant up

Wait until your VM starts. Everything is running fine when you see following lines in the output:

![Terminal output](https://media-api.atlassian.io/file/5cbc1d6a-544d-4308-bff0-4ba42cf450c6/image?mode=full-fit&client=0b92a718-239d-4d4d-a673-895d4daaa0a9&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIwYjkyYTcxOC0yMzlkLTRkNGQtYTY3My04OTVkNGRhYWEwYTkiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOjVjYmMxZDZhLTU0NGQtNDMwOC1iZmYwLTRiYTQyY2Y0NTBjNiI6WyJyZWFkIl19LCJleHAiOjE1MDc4Mjk4MDIsIm5iZiI6MTUwNzgyNjQ0Mn0.MNKbUfM0U3ydasj498Cu7u2clrX06a5sZWiTIjLFDZo "Terminal output")


## Running the Webpack Dev Server

To run the Webpack Dev Server, you will want to move into the aforementioned shared folder on your Vagrant server:

        vagrant ssh
        cd /vagrant
        npm start

Once you have the Webpack Dev Server up and running, you can jump over to your browser and visit <span style="color:blue">*localhost:8881*</span> and see that appication is running!
