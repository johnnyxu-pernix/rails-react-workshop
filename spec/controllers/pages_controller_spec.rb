# frozen_string_literal: true

require "rails_helper"

RSpec.describe PagesController, type: :controller do
  describe "home" do
    it "succeds" do
      get :home
      expect(response).to be_successful
    end
  end
end
