
CreateThread(function()
    while true do
        Citizen.Wait(1000)
        if MumbleIsConnected() then 
            SendNUIMessage({status = false})
        elseif not mic then
            SendNUIMessage({status = true})
        end
    end
end)
