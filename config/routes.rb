Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "boards#index"

  resources :boards, only: [:show]
  resources :cells

  get "/js_solution" => "js_solutions#show", as: :js_solution
end
