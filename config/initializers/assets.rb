# config/initializers/assets.rb

Rails.application.config.assets.configure do |env|
  # Remove the assignment of manifest attribute
  # env.manifest = Sprockets::Manifest.new(
  #   env,
  #   Rails.root.join('src', 'assets', 'config', 'manifest.js')
  # )

  # Add any other configurations you need for Sprockets here
end
