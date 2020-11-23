class Admin::EventsController < AdminController
  def index
  end

  def show
    @event = Event.find(params[:id])
    
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)

    if @event.save
      # expire_action controller: '/homepage', action: 'index_json'
      redirect_to [:admin, :events], notice: 'Event was successfully created'
    else
      render :new
    end
  end

  def event_params
    params.require(:event).permit(
      :title_ru,
      :description_ru,
      :title_en,
      :description_en
    )

  end

end
