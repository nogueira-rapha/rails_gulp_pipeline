namespace :assets do
  desc "Precompile assets using gulp pipeline"
  task precompile: :environment do
    if Rails.env.productions?
      system("npm install && gulp build")
    elsif Rails.env.development?
      system("npm install --loglevel verbose && gulp --verbose")
    end
  end

end
