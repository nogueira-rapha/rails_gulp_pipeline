namespace :assets do
  desc "TODO"
  task precompile: :environment do
    system("npm install --loglevel verbose")
  end

end
