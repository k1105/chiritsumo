Rails.application.routes.draw do
  root 'static_pages#top'
  get '/about', to: 'static_pages#about', as: 'about'
  resources :post_images, only: [:new, :create]
  #get 'post_images/new',to: 'post_images#new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end